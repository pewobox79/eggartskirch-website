const Footer =()=>{

    const date = new Date();
    const year = date.getFullYear();
    return <footer>
        <div className={"copyright"}><p className={"copyrightText"}>&copy; { year } ST. ISIDOR PFARRKIRCHE. All Rights Reserved.</p></div>

    </footer>
}
export default Footer