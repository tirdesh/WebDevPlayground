import { ReactElement, useRef } from "react"

type Props = {
    onSearch: (query: string) => void
}

export default (props: Props): ReactElement => {
    const inputRef =  useRef(null);
    const search = () => {
        const query = inputRef.current ? (inputRef.current as any).value : '';
        props.onSearch(query);
    }
    return(
        <div>
            <input ref={inputRef} type="text"></input>
            <button type="submit" onClick={search}>Search</button>
        </div>
    );
}