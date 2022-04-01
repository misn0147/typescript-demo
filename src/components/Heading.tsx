interface HeadingProps {
    text: string;
    callout?: string; // the ? indicates that this prop is optional and doesn't need to be passed in the object
}

function Heading({ text, callout = 'Welcome to our site!' }: HeadingProps) { //here we are giving a default value to callout in case callout is undefined as a prop. if it is supplied then we don't use the default value.
    return (
        <>
            <h1>{text}</h1>
            {/* {callout && <p>{callout}</p>} */} 
            <p>{callout}</p>
        </>
    );
}

export default Heading;
