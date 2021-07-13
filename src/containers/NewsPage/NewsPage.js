import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './NewsPage.module.css';
import NewsUpdats from '../../components/News/NewsUpdates/NewsUpdates';
import NewsPosts from '../../components/News/NewsPosts/NewsPosts';

const news = [
    {
        title: 'Reply from Frederick County Board of Education',
        content: `Greetings,

        Thank you for reaching out to me and sharing these notable suggestions for inclusion.
        
        Along with my fellow board members, I am copying Dr. Alban on this note so that she and her staff can review what you have shared with me and provide you with the most up-to-date information on what FCPS is currently doing to recognize and celebrate Asian American achievements, history, tradition and culture.
        
        Best wishes for a great day,
        Jason "Mr. J" Johnson
        Board of Education Member
        Frederick County Public Schools`
    },
    { 
        title: 'A Letter to BOE from Chinese American Parents Association of Frederick',
        content: `Dear Mr. Johnson, 


        This is Ru Yan and I'm the president of Chinese Parent Association of Frederick County (CAPA-FC). I’m writing this letter to propose two changes in our current school schedule and curriculums: 
        
        Consider making Lunar New Year a school holiday;
        
        Include more reading materials of history, economy and cultural studies of Asian Americans and Pacific Islanders(AAPI), and introduce more important Asian American people in the curriculum for  Frederick County Public Schools. 
        
        
        Frederick County is a diverse community. According to the Census in 2018, 4.37% of the people in Frederick County is Asian American. Asian population is higher in south Frederick county, especially in Urbana, where around 20%  are Asian Americans. As a resident in the Village of Urbana, in my child’s class, nearly half of the 12 students are Asian descendants. Lunar New Year is considered as one of the most important holidays in many Asian cultures, such as Chinese, Korean, Vietnamese communities. It is important to talk about this holiday in our schools to promote diversity. 
        
        
        We propose making Lunar New Year a school holiday, it can be an Asynchronous Day for all students or a day off for all faculty and students. We believe that the purpose of education is to teach students to be open minded,  informed and engaged citizens. In this historical moment, with a variety of interconnected national and global issues: a pandemic, inequality, and widespread fight for racial justice, we need to prepare our young people to meet these challenges. It is crucial to add more AAPI content into the current curriculum to keep our students informed and empathetic. We urge teachers in elementary schools in FCPS to involve more reading materials about this tradition before the holiday and encourage students to participate in Lunar New Year celebrations that are usually held in multiple local places. (For example, Asian American Center of Frederick, Frederick County Public Libraries and Frederick Chinese School jointly organized the celebration in 2019.) We also suggest that  middle school and high schools involve more content of  AAPI history and enclave economy and cultural studies and encourage students to do field research and interview with Asian people in the community. 
        
        
        In the rapidly growing globalization, especially under current situation there have been many cases of AAPI hate crime cases, making Lunar New Year a school holiday and add more AAPI content to the curriculum will be a small step forward to help next generation to be equipped and empowered to face greater challenges ahead, on a personal level, on a community level and on a global scale. 
        
        We’ll be doing surveys in the community to support our proposals and we can discuss it in the next board meeting. 
        
        
        Thanks for your time! 
        
        
        Ru Yan`
    }
]

class NewsPage extends Component {
    render() {
        return (
            <Auxiliary>
                <div className={classes.NewsPage}>
                    <NewsUpdats />
                    <NewsPosts news={news} />
                </div>
            </Auxiliary>
            
        )
    }
}

export default NewsPage;