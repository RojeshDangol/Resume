import { Injectable } from '@angular/core'

@Injectable( {providedIn: "root"})

export class DataService {

dataArray= [{name: { first: 'Rojesh', last: 'Dangol' },

            address: {
                        street: '816 Perry Hwy',
                        apt: 'Apt 24',
                        city: 'Pittsburgh',
                        state: 'PA',
                        zip: '15229'
                    },

    contact: {
        email: 'rozsx1@gmail.com',
        phone: '4126893520',
        link: 'www.linkedin.com/in/rojesh-dangol'
    },
    skill: [
        'C++',
        'HTML / JavaScript / CSS',
        'Python',
        'MySQL',
        'Angular',
        'Shell Scripting',
        'Adobe Photoshop / InDesign / Illustrator',
        '3D Modelling',
        'Git',
        'Arduino Programming'

    ],

    education: {
                year: {
                        start: 'Aug 2015',
                        end: 'May 2020'
                        },
        degree: 'Computer Science Information Technology',
        college: 'Slippery Rock University',
        address: 'Slippery Rock, PA'
    },

    description:['Recent graduate in computer science, actively seeking entry level job position in IT field. I am hard-working, self-motivated and a team player, always looking to improve my skills and learn more. I am committed to developing my career path as an IT professional and to expand on the work experience.'],

    experience: {year: {start: '2011', end: '2015'},

                    company: 'Help Me Dot Com. Pvt. Ltd',
                
                    position: 'Assistant Manager',
                
                    address: 'Kathmandu, Nepal',
                
                    duties: [
                    'Small scale online shopping and I was responsible to keep track of items in the store.',
                    'Responsible of purchasing and updating new items to sell.', 
                    'Manage the orders, decide how and when the delivery was to be made as the company had limited employees.',
                    'Deal with other partner companies and get the best deal possible.']

                 }
    }]

    get(){
        return this.dataArray;
    }

    add(newData: any){
        this.dataArray.push(newData);

    }

    delete(newData: any){
        const index = this.dataArray.indexOf(newData);
        if (index >= 0){
            this.dataArray.splice(index, 1);
        }
    }

}