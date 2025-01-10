import styles from '@/styles/Globals.module.css'

const SubTitle =({data}:{data: {text: string}[]})=>{

    const ListOfParagraphs = data?.map(subtitle=>{

        return <p key={subtitle.text}>{subtitle.text}</p>
    })

    return <div className={styles.subTitleWrapper}>

        {ListOfParagraphs}
    </div>
}

export default SubTitle;