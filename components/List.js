import Image from "next/image"
import styles from '../styles/List.module.css'

const List = ({people}) =>{
	return(
		<>
			{people.map(person => {
				const {id, name, image, age} = person
				return(
					<article key={id} className={styles.person}>
						<Image src={image} alt={name} priority width={75} height={75}/>
						<div>
							<h4>{name}</h4>
							<p>{age} years</p>
						</div>
					</article>
				)
			})}
		</>
	)
}

export default List