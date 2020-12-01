import React from 'react';
import { SubPage, Footer } from '../components';
import * as ROUTES from '../constants/routes';

export function SubPageContainer({ title }) {
    return (
        <SubPage>
            <SubPage.Frame>
                    <SubPage.Header>
                        <SubPage.Logo to={ROUTES.HOME} src='/images/misc/logo.svg' alt="Netflix" />
                        <SubPage.Title title={title}/>
                    </SubPage.Header>   
                </SubPage.Frame>

                <SubPage.Body>
                        <SubPage.TextTitle title={title}/>
                        <SubPage.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vehicula arcu et ultrices. In a lectus id elit suscipit pharetra laoreet 
                            varius metus. Nam non tincidunt erat. Vestibulum vitae ipsum dui. Suspendisse potenti. Etiam nec elit id leo semper laoreet. Proin nunc ante, 
                            consectetur in porttitor vel, auctor eu tellus. Proin sed felis mi. Sed in diam sit amet massa accumsan consequat. Nam venenatis orci eu velit 
                            facilisis, vitae eleifend odio pellentesque. Cras blandit suscipit lobortis. Nam lobortis ex id vulputate accumsan.
                        </SubPage.Text>
                        <SubPage.Text>
                            Nullam ac scelerisque massa. Curabitur faucibus nisi vel nisl dapibus varius. Sed sed lacus vel dolor eleifend ultrices. Vivamus scelerisque 
                            erat et egestas tempor. Nullam dapibus est ut sapien ornare, sed vestibulum ante volutpat. Morbi urna magna, faucibus a augue ut, sagittis 
                            faucibus magna. Nulla at ligula non lacus cursus elementum vitae eget mauris. Donec venenatis risus ac metus pellentesque tincidunt. Nulla non 
                            lorem finibus, laoreet erat at, tempus nunc. Aliquam quis nunc feugiat, elementum elit quis, faucibus.
                        </SubPage.Text>
                        <SubPage.Text>
                            Maecenas pulvinar nisl dolor, id volutpat erat blandit sed. Curabitur id sapien lectus. Fusce accumsan tellus ligula, sodales gravida augue 
                            finibus sed. Aenean lorem orci, tempor ut erat id, dapibus dignissim magna. Cras urna massa, ultricies et ligula vel, elementum condimentum 
                            urna. Nunc malesuada nec urna eu mollis. Morbi varius nulla ultricies, volutpat ante at, blandit mi. Nunc eu felis consectetur, laoreet felis 
                            vitae, luctus eros. Aliquam porta dui vitae orci consequat, et posuere magna ornare. Ut leo libero, placerat id tortor eget, efficitur 
                            condimentum leo. Sed a molestie nisl. Vivamus sed malesuada lacus. Integer id congue magna. Cras fringilla augue quis cursus aliquam. In ac 
                            tincidunt ipsum. Sed consectetur eros in convallis porttitor.
                        </SubPage.Text>  
                        <SubPage.Text>
                            Nulla rhoncus eleifend purus, non eleifend nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque, diam eu molestie 
                            aliquam, sem lacus varius nisi, eget porttitor nulla augue vitae odio. Cras a dolor pulvinar, dictum nibh non, rutrum mi. Maecenas a ligula dui.
                            Fusce pharetra convallis faucibus. Morbi auctor arcu quis mi laoreet facilisis. Vestibulum posuere lorem vel ipsum sagittis efficitur.
                        </SubPage.Text>  
                        <SubPage.Text>
                            Cras euismod rhoncus justo, sed pretium purus dignissim vitae. Maecenas vel rhoncus leo. Duis purus arcu, pharetra ut mauris posuere, 
                            interdum dignissim nisl. Praesent non nisl a erat faucibus efficitur quis non orci. Nulla blandit commodo laoreet. Integer convallis odio 
                            in lacus feugiat, varius accumsan enim rutrum. Nullam eleifend pulvinar rhoncus. Morbi ultrices et lacus a interdum. Nullam pretium 
                            pellentesque ipsum et hendrerit. Aenean viverra nulla a nunc posuere lacinia. Ut ante massa, mollis in suscipit quis, congue id ex. Donec 
                            et consectetur tortor. Morbi facilisis et sem nec volutpat.
                        </SubPage.Text>  
                        <SubPage.Text>
                            Maecenas pulvinar nisl dolor, id volutpat erat blandit sed. Curabitur id sapien lectus. Fusce accumsan tellus ligula, sodales gravida augue 
                            finibus sed. Aenean lorem orci, tempor ut erat id, dapibus dignissim magna. Cras urna massa, ultricies et ligula vel, elementum condimentum 
                            urna. Nunc malesuada nec urna eu mollis. Morbi varius nulla ultricies, volutpat ante at, blandit mi. Nunc eu felis consectetur, laoreet felis 
                            vitae, luctus eros. Aliquam porta dui vitae orci consequat, et posuere magna ornare. Ut leo libero, placerat id tortor eget, efficitur 
                            condimentum leo. Sed a molestie nisl. Vivamus sed malesuada lacus. Integer id congue magna. Cras fringilla augue quis cursus aliquam. In ac 
                            tincidunt ipsum. Sed consectetur eros in convallis porttitor.
                        </SubPage.Text>  
                        <SubPage.Text>
                            Nullam ac scelerisque massa. Curabitur faucibus nisi vel nisl dapibus varius. Sed sed lacus vel dolor eleifend ultrices. Vivamus scelerisque 
                            erat et egestas tempor. Nullam dapibus est ut sapien ornare, sed vestibulum ante volutpat. Morbi urna magna, faucibus a augue ut, sagittis 
                            faucibus magna. Nulla at ligula non lacus cursus elementum vitae eget mauris. Donec venenatis risus ac metus pellentesque tincidunt. Nulla non 
                            lorem finibus, laoreet erat at, tempus nunc. Aliquam quis nunc feugiat, elementum elit quis, faucibus.
                        </SubPage.Text>
                </SubPage.Body>

                <SubPage.Frame>
                <SubPage.Footer>
                    <Footer.ExternalLink href="https://github.com/V1co?tab=repositories">
                        <Footer.Github />
                    </Footer.ExternalLink>
                    <Footer.ExternalLink href="https://www.linkedin.com/in/r-pawlowski/">
                        <Footer.Linkedin />
                    </Footer.ExternalLink>
                    <Footer.ExternalLink href="mailto:rafal.pawlowski1993@gmail.com">
                        <Footer.Envelope />
                    </Footer.ExternalLink>
                    <Footer.ExternalLink href="https://www.facebook.com/v1coprivate">
                        <Footer.Facebook />
                    </Footer.ExternalLink>
                </SubPage.Footer>
                </SubPage.Frame>
        </SubPage>
    )
}