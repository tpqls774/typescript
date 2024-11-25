
const Main = () => {
    interface User {
        name: string;
    }
    const Sam: User = {name:'sam'}
    function showName(this:User, age: number){
        console.log(this.name, age)
    }
    const a = showName.bind(Sam)
    a(27)
    return (
        <>
            <h1>yeah</h1>
        </>
    )
}

export default Main
