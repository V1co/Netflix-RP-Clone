import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, FeatureClose } from './styles/player';
import ReactPlayer from "react-player"

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);
    
    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ url }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    
    return showPlayer
        ? ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)}>
                <Inner>
                    <ReactPlayer 
                        url={url}
                        playing={true}
                        width='100%'
                        height='100%'
                    />
                    <FeatureClose onClick={() => setShowPlayer(false)}>
                        <img src="/images/icons/close.png" alt="Close" />
                    </FeatureClose>
                </Inner>
            </Overlay>,
            document.body
        ) : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    
    return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
}