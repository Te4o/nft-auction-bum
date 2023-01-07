import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";

import Trending from "../trending/Trending";
import Card from "../card/Card";

export default function Copyright() {
    const _cards = [
        {
            name: "Ivy",
            user: {
                avatar: {
                    url: "images/avatar.png",
                },
                verified: true,
            },
            mediaUrl: "images/nft.jpg",
            price: 1,
            currency: "ETH",
        },
        {
            name: "Judie",
            user: {
                avatar: {
                    url: "images/avatar.png",
                },
                verified: true,
            },
            mediaUrl: "images/nft.jpg",
            price: 2.3,
            currency: "ETH",
        },
        {
            name: "Juniper",
            user: {
                avatar: {
                    url: "images/avatar.png",
                },
                verified: true,
            },
            mediaUrl: "images/nft.jpg",
            price: 5,
            currency: "ETH",
        },
        {
            name: "Maple",
            user: {
                avatar: {
                    url: "images/avatar.png",
                },
                verified: true,
            },
            mediaUrl: "images/nft.jpg",
            price: 10,
            currency: "ETH",
        },
    ];

    const card = {
        name: "Ivy",
        likes: 1100,
        user: {
            avatar: {
                url: "images/avatar.png",
            },
            verified: true,
        },
        mediaUrl: "images/nft.jpg",
        price: "~12.5",
        currency: "ETH",
    };

    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} maxWidth="xl">
                {/* <Paper className={classNames(styles.paper)}>
                    <Link href="/about" color="secondary">
                        Hi
                    </Link>
                </Paper> */}
                <Trending cards={_cards} />
                <Card
                    name={card.name}
                    likes={1100}
                    mediaUrl={card.mediaUrl}
                    user={card.user}
                    price={card.price}
                    currency={card.currency}
                />
            </Container>
        </div>
    );
}