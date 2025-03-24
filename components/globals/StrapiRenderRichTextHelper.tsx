'use client'
import Link from "next/link";
import {JSX} from "react";
import styles from '@/styles/StrapiContentFormater.module.css'

const StrapiRenderRichTextHelper = ({blocks}: { blocks: [] }) => {

    //@-ts-ignoe
    const renderChildren = (children: { type: string, children: [], level: number, format: string }) => {

        const mainType = children?.type
        const listFormat = children?.format;

        console.log("children", children)

        return children?.children?.map((child: {
            text: string,
            type: string,
            url: string,
            bold: boolean,
            children: [{ text: string, type: string, url: string , children: {text: string}[]}]
        }, index) => {
            const individualKeyExtension = Math.random() * 100
            switch (mainType) {
                case 'paragraph':
                    if (child.type === "text") {

                        if (child?.text?.length === 0) {

                            return <div key={ index * individualKeyExtension } style={ {padding: "10px 0"} }></div>
                        } else {


                            return <p key={ index + individualKeyExtension }
                                      className={`${styles.paragraph} ${child.bold ? styles.paragraphBold: ""}`}>{ child.text }</p>;
                        }
                    } else if (child?.type === "link") {
                        return child?.children?.map((item) => {

                            return <Link className={ styles.hyperlink } href={ `${child.url}` }
                                         key={ item.text + individualKeyExtension } target={child.url.includes("segenskirchecms") ? "_blank": "_self"}>{ item.text }</Link>

                        })

                    }
                    break;
                case "heading":
                    const HeadingTag = `h${ children.level }` as keyof JSX.IntrinsicElements;
                    return <div key={ index + individualKeyExtension } style={ {padding: "10px 0"} }>
                        <HeadingTag>{ child.text }</HeadingTag></div>;
                case "list":
                    if (listFormat === "unordered") {

                        return <ul key={ index + individualKeyExtension }>
                            { child.children?.map((item:{type: string, text: string, url: string, children: {text: string}[]}, index:number) => {

                                console.log("item", item)
                                      if(item.type === "text"){
                                          if(item.text?.length === 0){
                                              return
                                          }
                                          return <li key={ index + individualKeyExtension } className={ styles.listItem }
                                          >{ item.text } </li>
                                      }

                            return <Link href={item.url} key={ index + individualKeyExtension } target={item.url.includes("segenskirchecms") ? "_blank": "_self"} className={ styles.listItem }>
                                <li>{item.children[0].text }</li></Link>
                        }) }</ul>;
                    } else {
                        return <ol key={ index + individualKeyExtension }>{ child.children?.map((item, index) => (
                            <li key={ index + individualKeyExtension } className={styles.listItem}>{ item.text }</li>
                        )) }</ol>;
                    }

                case "quote":
                    return <p key={individualKeyExtension}className={styles.quoteStyle}>{child.text}</p>
                default:
                    return null; // Return nothing for unrecognized types
            }
        });
    };

    const RenderedComponents = blocks?.map((block) => {
        const indiKeyIndex = Math.random() * 90
        return <div key={ indiKeyIndex } >
            { renderChildren(block) }
        </div>
    })
    return (
        <>
            { RenderedComponents }
        </>
    );
};
export default StrapiRenderRichTextHelper