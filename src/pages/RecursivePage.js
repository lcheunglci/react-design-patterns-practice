import React from "react";
import { RecursiveComponent } from "../RecursiveComponents/RecursiveComponent";

const nestedObject = {
    a: 1,
    b: {
        b1: 4,
        b2: {
            b23: 'Hello',
        },
        b3: {
            b31: {
                message: 'Hi',
            },
            b32: {
                message: 'Hi',
            }
        }
    },
    c: {
        c1: 2,
        c2: 3,
    }
}

const RecursivePage  = () => (
    <>
    <h1>Nest Component page</h1>
    <RecursiveComponent data={nestedObject} />
    </>
)

export default RecursivePage;