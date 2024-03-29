function App() {
    return (
        // relative position to it's container
        <main className={"relative"}>
            nav
            <section className={"xl:padding-1 wide:padding-r padding-b"}>
                Hero
            </section>
            <section className={"padding"}>
                Popular products
            </section>
            <section className={"padding"}>
                super quality
            </section>
            <section className={"padding-x py-10"}>
                services
            </section>
            <section className={"padding"}>
                special order
            </section>
            <section className={"padding bg-pale-blue"}>
                customers review
            </section>
            <section className={"padding padding-x sm:py-32 py-16 w-full"}>
                subscribe
            </section>
            <section className={"padding bg-black padding-x padding-t pb-8"}>
                footer
            </section>
        </main>
    );
}

export default App;
