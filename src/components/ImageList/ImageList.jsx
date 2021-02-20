import { useEffect } from "react";
import { useDispatch,  useSelector} from "react-redux"
import UploadForm from '../UploadForm/UploadForm'

function ImageList() {
    const images = useSelector(store => store.images)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_IMAGES' })
    }, []);
    
    return(
        <>
        <UploadForm/>
        {images.map(images => {
            return(
               <div key = {images.id}>
                   <p>{images.name}</p>
                   <img src = {images.img_url}/>
               </div>
            )
        })
    }</>
    )
}
export default ImageList