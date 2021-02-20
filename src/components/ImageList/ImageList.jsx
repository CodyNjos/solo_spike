import { useEffect } from "react";
import { useDispatch,  useSelector} from "react-redux"

function ImageList() {
    const images = useSelector(store => store.images)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_IMAGES' })
    }, []);
    return(
        <>
        <input placeholder='name'/>
        <input placeholder='Image'/>
        {images.map(images => {
            return(
               <div key = {images.id}>
                   <p>{images.title}</p>
                   <img src = {images.img_url}/>
               </div>
            )
        })
    }</>
    )
}
export default ImageList