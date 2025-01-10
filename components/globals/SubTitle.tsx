import styles from '@/styles/Globals.module.css'

const SubTitle =({data}:{data: {text: string}[]})=>{

    const ListOfParagraphs = data?.map(subtitle=>{

        if(subtitle.text.includes("@")){

            return <a key={subtitle.text} href={`mailto:${subtitle.text}`}>{subtitle.text}</a>
        }else{
            return <p key={subtitle.text}>{subtitle.text}</p>

        }

    })

    return <div className={styles.subTitleWrapper}>

        {ListOfParagraphs}
    </div>
}

export default SubTitle;