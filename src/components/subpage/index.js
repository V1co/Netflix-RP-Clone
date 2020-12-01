import React from 'react';
import { Container, Title, Text, Header, Logo, TextTitle, Frame, Body, Footer } from './styles/subpage';
import { Link as ReachRouterLink } from 'react-router-dom';

export default function SubPage({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

SubPage.Header = function SubPageHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>;
}

SubPage.Body = function SubPageBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>;
}

SubPage.Frame = function SubPageFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
}

SubPage.Title = function SubPageTitle({ title, children, ...restProps }) {
    return <Title {...restProps}>{title}{children}</Title>;
}

SubPage.TextTitle = function SubPageTextTitle({ title, children, ...restProps }) {
    return <TextTitle {...restProps}>{title}{children}</TextTitle>;
}

SubPage.Text = function SubPageText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

SubPage.Footer = function SubPageFooter({ children, ...restProps }) {
    return <Footer {...restProps}>{children}</Footer>;
}

SubPage.Logo = function SubPageLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}