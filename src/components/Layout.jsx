

export default function Layout (props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">The Workout Program</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://github.com/papidivine8" 
            target="_blank">Divine</a></p>
        </footer>
    )

    return (

        <>
            {header}
            {children}
            {footer}
        </>

    )
}