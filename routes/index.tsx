/** @jsx h */
import {h} from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
    return (
        <div>
            <img
                src="/logo.svg"
                height="100px"
                alt="the fresh logo: a sliced lemon dripping with juice"
            />
            <h2>测试fresh</h2>
            <h4>deplpy1</h4>
            <p>
                Welcome to `fresh`. Try update this message in the ./routes/index.tsx
                file, and refresh.
            </p>
            <Counter start={3} />
        </div>
    );
}
