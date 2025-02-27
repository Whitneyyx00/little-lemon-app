import React from "react";

function Main() {
    return (
        <main>
            <section className="hero">
                <h2>Little Lemon</h2>
                <p>Chicago</p>
                <p>Lorem ipsum dolor sit amet. Vel internos galisum qui libero amet quo dolores ducimus. Et ducimus nihil hic similique suscipit sed exercitationem molestiae ea nesciunt libero sed omnis porro?</p>
                <button>Reserve a Table</button>
            </section>

            <section className="specials">
                <h2>Weekly Specials</h2>
                {/* Specials content will be added later */}
            </section>

            <section className="testimonials">
                <h2>Testimonials</h2>
                {/* Testimonials content will be added later */}
            </section>

            <section className="about">
                <h2>About Little Lemon</h2>
                <p>A family-owned Mediterranean restaurant...</p>
            </section>
        </main>
    );
}

export default Main;