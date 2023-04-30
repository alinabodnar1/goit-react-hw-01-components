import PropTypes from "prop-types";
import getRandomColor from '../../getRandomColor';
import cssModule from './Statistics.module.css';

export default function Statistics({title, dataArray}) {
        return (
            <section className={cssModule.statistics}>
                { title && 
                    (<h2 className={cssModule.title}>{title}</h2>)
                }
                <ul className={cssModule['stat-list']}> 
                    { dataArray.map(obj => (
                        <li className={cssModule.item} key={obj.id} style={{backgroundColor: getRandomColor()}}>
                            <span className={cssModule.label}>{obj.label}</span>
                            <span className={cssModule.percentage}> {obj.percentage} %</span>
                        </li>
                    ))} 
                 </ul>
            </section>
        )     
}

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}