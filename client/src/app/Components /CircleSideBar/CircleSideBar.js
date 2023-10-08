import styles from './CircleSideBar.module.css'
import * as Unicons from '@iconscout/react-unicons'

const Circle = ({Unicon}) => {
    return (
    <div className={styles.circle}>
   {Unicon}
    </div>
    )
}

export default function CircleSideBar() {
    return (
        <div className={styles.circle_container}>

     
            <Circle Unicon={<Unicons.UilFacebookF color="black"/>}/>
            <Circle Unicon={<Unicons.UilInstagram color="black"/>}/>
            <Circle Unicon={<Unicons.UilTwitter color="black"/>}/>
            

        </div>
    )
}