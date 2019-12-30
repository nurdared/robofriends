import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <Fragment>
            <section className="container">
            {
                robots.map((robot) =>
                    (
                        <Card
                            key={robot.id}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                        />
                    )
                )
            }
            </section>
        </Fragment>
    );
}

export default CardList;