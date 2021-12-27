import {Column} from '../components/Column.js';
import {Header} from '../components/Header.js';
import {ImageButtonCard} from '../components/ImageButtonCard.js';
import { Row } from '../components/Row.js';
import {ImageInfoCard} from '../components/ImageInfoCard.js';

export function HomeScreen() {

    const column = Column({
        children: [
            Header(),
            Row({
                style: {
                    backgroundColor: 'white',
                    marginBottom: '60px'
                },
                children:[
                    ImageButtonCard({style: { width: '100%'}})
                ]
            }),
            Row({
                style: {
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    marginBottom: '60px'
                },
                children:[
                    ImageButtonCard({style: { width: '48%'}, buttonType:'outline'}), 
                    ImageButtonCard({style: { width: '48%'}})
                ]
            }),
            Row({
                style: {
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    marginBottom: '60px'
                },
                children:[
                    ImageInfoCard(),
                    ImageInfoCard(),
                    ImageInfoCard(),
                    ImageInfoCard(),
                ]

            })

            
        ]
    });
        
    return column;    
};

