import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Loading, Header, Player } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import { CardGroupContainer } from './card-group';

export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);
    
    const { firebase } = useContext(FirebaseContext);
    
    const user = {
        displayName: "Guest",
        photoURL: "1"
    };
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [user])
    
    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);
    
    useEffect(() => {
      const fuse = new Fuse(slideRows, { keys: ['data.title', 'data.genre'] });
      const results = fuse.search(searchTerm).map(({ item }) => item);
      
      if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
          setSlideRows(results);
      } else {
          setSlideRows(slides[category]);
      }
    }, [searchTerm])
    
    return profile.displayName ? (
        <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
        
            <Header src="glitch" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                        <Header.Link 
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}>
                            Series
                        </Header.Link>
                        <Header.Link 
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}>
                            Films
                        </Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.Link>{user.displayName}</Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link onClick={() => firebase.auth().signOut()}>
                                        Sign out</Header.Link>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Glitch Now</Header.FeatureCallOut>
                    <Header.Text>
                    James Hayes is a small town policeman in Yoorana, Victoria. He is called to the local cemetery to 
                    discover that seven people have risen from the dead in perfect health but with no memory of 
                    their identities. They are determined to find out who they are and what has happened to them.
                    James struggles to keep the case hidden from his colleagues, his family, and the 
                    world, with the help of local doctor Elishia McKellar.
                    </Header.Text>
                        <Player>
                            <Player.Button />
                            <Player.Video url="https://www.youtube.com/watch?v=pYub7xwhWYg&t=2s"/>
                        </Player>
                </Header.Feature>
            </Header>

        { loading === false ?
            <CardGroupContainer category={category} slideRows={slideRows} />
        : null }

            <FooterContainer />
        </>)
        : (<SelectProfileContainer user={user} setProfile={setProfile} />);
}