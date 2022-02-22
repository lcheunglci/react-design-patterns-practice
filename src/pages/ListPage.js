import React from "react";

import { LargePersonListItem } from '../LayoutComponents/List/people/LargePersonListItem';
import { SmallPersonListItem } from '../LayoutComponents/List/people/SmallPersonListItem';
import { LargeProductListItem} from '../LayoutComponents/List/products/LargeProductListItem';
import { SmallProductListItem} from '../LayoutComponents/List/products/SmallProductListItem';

import { RegularList } from '../LayoutComponents/List/RegularList';
import { NumberedList } from '../LayoutComponents/List/NumberedList';

const ListPage = () => {


    const people = [{
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: ['swimming', 'bicycling', 'video games'],
    }, {
        name: 'Brenda Smith',
        age: 33,
        hairColor: 'black',
        hobbies: ['golf', 'mathematics'],
    }, {
        name: 'Jane Garcia',
        age: 27,
        hairColor: 'blonde',
        hobbies: ['biology', 'medicine', 'gymnastics'],
    }];
    
    const products = [{
        name: 'Flat-Screen TV',
        price: '$300',
        description: 'Huge LCD screen, a great deal',
        rating: 4.5,
    }, {
        name: 'Basketball',
        price: '$10',
        description: 'Just like the pros use',
        rating: 3.8,
    }, {
        name: 'Running Shoes',
        price: '$120',
        description: 'State-of-the-art technology for optimum running',
        rating: 4.2,
    }];
    

    return (
        <>
        <p>List Page</p>
        <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
        <NumberedList items={people} resourceName="person" itemComponent={LargePersonListItem} />
        <RegularList items={products} resourceName="product" itemComponent={SmallProductListItem} />
        <RegularList items={products} resourceName="product" itemComponent={LargeProductListItem} />
        <LargeProductListItem product={products[0]} />
        </>
    )
}

export default ListPage;