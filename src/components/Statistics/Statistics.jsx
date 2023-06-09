import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({title, stats}) =>{
  return(
  <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
  <ul className={css.statList}>
  {stats.map(e => {
          return (
            <li key={e.id} className={` ${css.item} ${css[`${e.label}`.slice(1)]}`}>
              <span className={css.label}>{e.label}</span>
              <span className={css.percentage}>{e.percentage}%</span>
            </li>
          )
        })}
  </ul>
</section>
)
}
 
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
}