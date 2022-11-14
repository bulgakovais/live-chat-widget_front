import { MainLayout } from "../components/MainLayout"
import {Accordion, AccordionSummary, AccordionDetails, Typography, TextField} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from "react-redux";
import { useState } from "react";

export default function FAQ () {
    const questions = useSelector(state => state.faq.questions)
    const [searchValue, setSearchValue] = useState('')
    const filteredQuestions = questions.filter(question => {
        return question.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    return ( <>
    <MainLayout>
        <main>
            <h1>Нужна помощь?</h1>
            <div>
            <TextField id="outlined-basic" label="Найти ответы" variant="outlined" onChange={event=> setSearchValue(event.target.value)} sx={{width:'100%', marginBottom:'1.5rem'}}/>
            </div>
            <div>
                {
                    filteredQuestions?.map((item)=>{ return (
                        <Accordion key={item.id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography sx={{fontWeight:'bold'}}>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography sx={{textAlign:'justify'}}>
                              {item.answer}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                    )
                   })
        }
    </div>
        </main>
    </MainLayout>

    <style jsx>{`
        main {
            padding: 2rem;
            max-height: 600px;
            overflow-y:scroll;
        }
    `}</style>
    </>)
}