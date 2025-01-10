import styles from '@/styles/Globals.module.css'
const BodyContent =({data}:{data: {text:string}[]})=>{

    const bodyContent = data?.map(body => {
        return <p key={body.text}>{body.text}</p>
    })

    return <div className={styles.bodyContentWrapper}>
        {bodyContent}
    </div>
}
export default BodyContent