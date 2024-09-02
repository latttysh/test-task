import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { addNewSquare, deleteLastSquare } from './store/slices/squares.slice'
import { motion, AnimatePresence } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import randomColor from 'randomcolor'
function App() {
    const dispatch = useDispatch()
    const squares = useSelector((state: RootState) => state.squares.items)

    const handleAddSquare = () => {
        const newSquare = { id: uuidv4(), color: randomColor() }
        dispatch(addNewSquare(newSquare))
    }

    const handleRemoveSquare = () => {
        if (squares.length > 0) {
            dispatch(deleteLastSquare())
        }
    }

    return (
        <section className="squares">
            <h1 className="squares__title">Squares</h1>
            <div className="squares-buttons">
                <button
                    className="squares-buttons__add button"
                    onClick={handleAddSquare}
                >
                    Добавить
                </button>
                <button
                    className="squares-buttons__delete button"
                    onClick={handleRemoveSquare}
                >
                    Удалить
                </button>
            </div>
            <div className="squares-list">
                <AnimatePresence>
                    {squares.map((square) => (
                        <motion.div
                            key={square.id}
                            initial={{ opacity: 0, x: -200 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: 'easeInOut',
                                },
                            }}
                            exit={{
                                opacity: 0,
                                x: 200,
                                transition: {
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                },
                            }}
                            layout={'position'}
                            style={{ backgroundColor: square.color }}
                            className="squares-list__item"
                        />
                    ))}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default App
