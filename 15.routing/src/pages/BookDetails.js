import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { books } from '../data';

const BookDetails = () => {

    const [book, setBook] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const book = books.find(book => book.id === Number(id))
        if (book) {
            setBook(book)
        }
    }, [id])

    return (
        <div>
            <h3>Book Details</h3>
            <p>Book Name is {book.name}</p>
        </div>
    )
}

export default BookDetails