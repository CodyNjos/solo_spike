import { useEffect } from "react";
import { useDispatch,  useSelector} from "react-redux"

function ImageList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_IMAGES' })
    }, []);
    return(
        <>
        <input placeholder='name'/>
        <input placeholder='Image'/>
        </>
    )
}
export default ImageList