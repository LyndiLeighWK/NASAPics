import React from 'react';
import axios from 'axios';
import App from './../App';
import {Text} from 'react-native';
import Header from '../src/components/Header';
import HomeScreen from '../src/components/HomeScreen';
import Button from '../src/components/Button';
import Card from '../src/components/Card';
import CardSection from '../src/components/CardSection';
import renderer from 'react-test-renderer';

it('App renders without crashing', () => {
    const rendered = renderer.create(<App/>).toJSON();
    expect(rendered).toBeTruthy();
});

it('Home Screen loads App Stylesheet', () => {
    const rendered = renderer.create(<HomeScreen/>).toJSON();
    expect(rendered.props.style).toBeTruthy();
});

it('Header displays Title Property', () => {
    const rendered = renderer.create(<Header text="Hello World"/>).toJSON();
    expect(rendered.children[0].children[0]).toBe('Hello World');
});

it('Button displays Text Child', () => {
    const rendered = renderer.create(<Button>Test Button</Button>).toJSON();
    expect(rendered.children[0].children[0]).toBe('Test Button');
});

it('Card Section displays Text Child', () => {
    const rendered = renderer.create(<CardSection><Text>Test Card</Text></CardSection>).toJSON();
    expect(rendered.children[0].type).toBe('Text');
});

it('API Request Returns Sucess Status', () => {
    axios.get(HomeScreen.API_ENDPOINT)
    .then(response => expect(response.status).toBe(200));
});
