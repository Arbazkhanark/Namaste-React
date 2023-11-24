const head=React.createElement("h1",{
    id:"head",
    class:"heading"
},"Heading 1");

const head2=React.createElement("h1",{
    class:"head2",
    style:{
        color:"blue",
        margin:"20px"
    }
},"Heading 2")

const container=React.createElement("div",{
    style:{
        border:"2px solid black",
        textAlign:"center"  /// camelCase here
    }
},[head,head2]);// Here we put in array if multiple elements in container


//ReactDOM will modify in DOM 
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(container)
// root.render(head);   //This will Rerender root Element