import axios from "axios";
import { useDataSource } from "../hooks/useDataSource";

const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl)
    return response.data;
};

const localStorageResource = key => () => {
    return localStorage.getItem(key);
}

export const DataSourceProductInfo = ({productId}) => {

    const product = useDataSource( serverResource(`/products/${productId}`) );
    const message = useDataSource(localStorageResource('message'));

    const { name, price, description, rating } = product || {};

    return product ? (
        <>
        <h3>{name}</h3>
        <p>{price}</p>
        <h3>Description</h3>
        <p>{description}</p>
        <p>Average Rating: {rating}</p>
        <p>Message: {message}</p>
        
        </>
    ) :  <p>Loading...</p>;
}