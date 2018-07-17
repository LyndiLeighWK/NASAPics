import React from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import axios from 'axios';
import moment from 'moment';

import Styles from './Styles';
import Card from './Card';
import CardSection from './CardSection';
import Header from './Header';
import Button from './Button';


class HomeScreen extends React.Component {

    static get API_ENDPOINT() { return 'https://api.nasa.gov/planetary/apod?api_key=IJ7ZRsSIGvLapSPjhfojEmWhBNyejCYN9F1qJQjL'; }
    static get ORIG_DATE_FORMAT() { return 'YYYY-MM-DD'; }
    static get DESIRED_DATE_FORMAT() { return 'MMMM D, YYYY'; }

    constructor(props){
        super(props);
        this.state = {
            picOfTheDay: {
                date : new Date()
            },
        };
    }

    componentWillMount() {
        //Fetch Today's Content
        axios.get(HomeScreen.API_ENDPOINT)
        .then(response => this.setState({picOfTheDay: response.data}))
        .catch(error => { console.log('caught', error.message) });

        // Dummy Data for Building out Screen without API calls
        // var defaultPic = {
        //     url : 'https://apod.nasa.gov/apod/image/1807/Capture13_07_2018_2_09_09AM_PK1024.jpg',
        //     title : 'A Nibble on the Sun',
        //     copyright : 'Padraic Koen',
        //     date : '2018-07-15',
        //     explanation : 'The smallest of the three partial solar eclipses during 2018 was just yesterday, Friday, July 13. It was mostly visible over the open ocean between Australia and Antarctica. Still, this video frame of a tiny nibble on the Sun was captured through a hydrogen-alpha filter from Port Elliott, South Australia, during the maximum eclipse visible from that location. There, the New Moon covered about 0.16 percent of the solar disk. The greatest eclipse, about one-third of the Sun\'s diameter blocked by the New Moon, could be seen from East Antarctica near Peterson Bank, where the local emperor penguin colony likely had the best view. During this prolific eclipse season, the coming Full Moon will bring a total lunar eclipse on July 27, followed by yet another partial solar eclipse at the next New Moon on August 11.'
        // }
        // this.setState({
        //     picOfTheDay: defaultPic,
        // });
    };

    onNavigateForward(){
        // Add day to current state date
        var nextDate = new moment(this.state.picOfTheDay.date).add(1, 'day').format(HomeScreen.ORIG_DATE_FORMAT);
        // Fetch new content
        this.navigateToNewDay(nextDate);
    };

    onNavigateBackward() {
        // Subtract day to current state date
        var previousDate = new moment(this.state.picOfTheDay.date).subtract(1, 'day').format(HomeScreen.ORIG_DATE_FORMAT);
        // Fetch new content
        this.navigateToNewDay(previousDate);
    };

    formatDate() {
        return moment(this.state.picOfTheDay.date, HomeScreen.ORIG_DATE_FORMAT).format(HomeScreen.DESIRED_DATE_FORMAT);
    };

    checkIfForwardNavAvailable() {
        return moment().format(HomeScreen.DESIRED_DATE_FORMAT) == moment(this.state.picOfTheDay.date, HomeScreen.ORIG_DATE_FORMAT).format(HomeScreen.DESIRED_DATE_FORMAT);
    };

    navigateToNewDay(newDay){
        // Fetch new content
        axios.get(HomeScreen.API_ENDPOINT + '&date=' + newDay)
        // Update state
        .then(response => this.setState({picOfTheDay: response.data}))
        .catch(error => { console.log('caught', error.message) });
    };

    render() {
        return (
            <View style={Styles.containerStyle}>
                <ScrollView>
                    <Header text='NASA Picture of the Day' />
                    <Card>
                        <CardSection>
                            <Button onPress={() => this.onNavigateBackward()}>&lt;&lt;</Button>
                            <Text style={Styles.dateStyle}> { this.formatDate(this.state.picOfTheDay.date)}</Text>
                            <Button onPress={() => this.onNavigateForward()}>
                                {/* Only display forward button if current date is not today */}
                                { this.checkIfForwardNavAvailable() ? null : '>>' }
                            </Button>
                        </CardSection>
                        <Image
                            style={Styles.imageStyle}
                            source={{uri: this.state.picOfTheDay.url}}
                        />
                        <CardSection>
                            { this.state.picOfTheDay.copyright != null ? <Text>{'Copyright : ' + this.state.picOfTheDay.copyright}</Text> : null}
                        </CardSection>
                        <CardSection>
                            <Text style={Styles.titleStyle}>{this.state.picOfTheDay.title}</Text>
                        </CardSection>
                        <CardSection>
                            <Text style={Styles.textStyle}>{this.state.picOfTheDay.explanation}</Text>
                        </CardSection>
                    </Card>
                </ScrollView>
            </View>
        );
    }
};

export default HomeScreen;
