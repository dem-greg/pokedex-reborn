import {Field, Form, Formik} from "formik";
import React from "react";
import './PokemonSearchForm.css';
type PropsType= {
    errorBySearch:boolean
    onSearchPokemon:(name: string)=> void
}

type PokemonSearchFormType={
    term: string
}


let PokemonSearchForm: React.FC<PropsType> = (props)=> {

    const submit = (values: PokemonSearchFormType, {setSubmitting}: {setSubmitting: (isSubmitting:boolean)=> void}) => {

        let name = values.term.toLowerCase()
            props.onSearchPokemon(name)
            setSubmitting(false);
    }

    return <Formik initialValues={{term: ''}}  onSubmit={submit}>
            {({isSubmitting}) => (
                <Form>
                    {props.errorBySearch&& <div style={{ padding: "15px 10px", color: "red"}}>Pokemon is not found</div>}
                    <Field className={props.errorBySearch  ? "error_name": null} type="text"
                           name="term" placeholder="🔍"  />
                    <button className={"btn_find"} type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
}

export default PokemonSearchForm