import React from 'react';
import axios from 'axios';
import moment from 'moment';
import style from './Projects.scss';
import ExperienceBlurb from '../../ui/ExperienceBlurb/ExperienceBlurb';
import globatiImage from '../../../assets/gb.jpg';
import githubImage from '../../../assets/gh.png';
import peImage from '../../../assets/pe.png';
import sunny from '../../../assets/sunny.svg';
import me from '../../../assets/daniel.png';
import AppContainer from '../../ui/AppContainer/AppContainer';
import Layout from "../../ui/Layout/Layout";

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {commit: '', date: ''};
    }

    componentDidMount() {
        axios.get('https://api.github.com/repos/danielptm/practice/commits')
        .then((res) => {
            const commit = res.data[0].commit.message;
            const date = moment(res.data[0].commit.committer.date).format('L');
            const url = res.data[0].html_url;
            this.setState({commit: commit, date: date, url: url});
        })
    }

    render(){
        return(
            <Layout>
                <ExperienceBlurb
                    image={globatiImage}
                    url={'http://globati.com'}
                    urlName={'globati.com'}
                    title={'Globati'}
                    description={'I came up with an idea for a hobby project which became the basis of a company. ' +
                    'I designed and built the entire Globati platform (globati.com). This was built with angular, react-native, java, node and AWS for hosting and database services.' +
                    'It is hosted on 3 S3 buckets and connects through an API built with java/spring on an elastic beanstalk instance. ' +
                    'The mobile app was built with react-native and is available on Googleplay as well as Appstore. ' +
                    'The app connects to an api written in node also on an elastic beanstalk. ' +
                    'If you want to see the app in action, make sure to search for Stockholm. ' +
                    'Disclaimer: How the app is going to work is going through a change right now. So the node server was shut down, and therefore the app doesn\'t work at the moment. '+
                    'It will be up and running and with new features by November.'
                    }
                />
                <ExperienceBlurb
                    image={githubImage}
                    url={'http://github.com/danielptm'}
                    urlName={'github.com/danielptm'}
                    title={'Github projects'}
                    description={
                        'This is my github account. There is not a whole lot available to the public partly because I deleted a bunch of old repos too that I was not doing anything on.' +
                        'Globati lives entirely in private repos. I can show the source for for those projects for interview purposes.' +
                        'Although there is some stuff there. Currently I am setting up seed projects in react and node that will be used by me as well as for future projects' +
                        'at the company I work for, so that we can get projects up and running quickly and in a consistent way.'
                    }
                />
                <ExperienceBlurb
                    image={sunny}
                    url={'http://github.com/danielptm/WeatherApp'}
                    urlName={'Weather app'}
                    title={'Weather app'}
                    description={
                        'This is just a really small project I made in about 90 minutes just playing around with the https://openweathermap.org/api api in order to predict the weather in Portland Oregon'
                    }
                />
                <ExperienceBlurb
                    image={me}
                    url={'https://github.com/danielptm/react-scss'}
                    urlName={'This website source code'}
                    title={'My personal website'}
                    description={
                        'This website was made by me just as a little hobby project to practice react and also demonstrate my skills/experience at the same time. The design is completely my own (but I did not do the photoshopped image).'
                    }
                />
                { this.state.commit !== '' ? <ExperienceBlurb
                    image={peImage}
                    url={this.state.url}
                    urlName={'Code review'}
                    title={'Code problems'}
                    extraInfoDate={this.state.date}
                    extraInfo={this.state.commit}
                    description={'These are some coding problems that I have done taken from websites that provide CS problems such as projecteuler.net, uva.onlinejudge.org and others . The solutions are written in node and java.' +
                    ' I also take this opportunity to practice unit testing with mocha for node and junit for the java problems.'}
                />: <p>Loading</p> }
            </Layout>
        )
    }
}

export default Projects;