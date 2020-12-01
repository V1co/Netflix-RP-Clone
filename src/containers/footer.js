import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact me.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
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
            </Footer.Row>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link to="audio-sub">Audio and Subtitles</Footer.Link>
                    <Footer.Link to="media">Media Centre</Footer.Link>
                    <Footer.Link to="privacy">Privacy</Footer.Link>
                    <Footer.Link to="contact">Contact Us</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link to="audio-desc">Audio Description</Footer.Link>
                    <Footer.Link to="invest">Investor Relations</Footer.Link>
                    <Footer.Link to="legal">Legal Notices</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link to="help">Help Centre</Footer.Link>
                    <Footer.Link to="jobs">Jobs</Footer.Link>
                    <Footer.Link to="cookies">Cookie Preferences</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link to="gifts">Gift Cards</Footer.Link>
                    <Footer.Link to="/terms#">Terms of Use</Footer.Link>
                    <Footer.Link to="corporate">Corporate Information</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix Clone - Rafal Pawlowski ©2020</Footer.Text>
        </Footer>
    )
}