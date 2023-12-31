import Icon1 from '../assets/img/icon1.png'
import Icon2 from '../assets/img/icon2.png'
import Icon3 from '../assets/img/icon3.png'
import Icon4 from '../assets/img/icon4.png'
import { Modal, Box, Typography, Button } from '@mui/material/';
import { useState } from 'react';

export default function Solutions() {
   const [open, setOpen] = useState(false);
   const [selectedSolution, setSelectedSolution] = useState(null);

   const handleOpen = (solution) => {
    setSelectedSolution(solution);
        setOpen(true)
   }

   const handleClose = () => {
        setOpen(false)
   }

   const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
   };

    return (
        <>
            <section id="solutions" className="container-card">
                <div className="content-card">
                    <img src={Icon1} alt="" />
                    <h1>Automação de Sistemas</h1>
                    <Button onClick={() => handleOpen('automation')}>Ver Mais</Button>
                </div>
                <div className="content-card">
                    <img src={Icon2} alt="" />
                    <h1>Gestão de processo e tecnologia</h1>
                    <Button onClick={() => handleOpen('processManagement')}>Ver Mais</Button>
                </div>
                <div className="content-card">
                    <img src={Icon3} alt="" />
                    <h1>Otimização de processos</h1>
                    <Button onClick={() => handleOpen('processOptimization')}>Ver Mais</Button>
                </div>
                <div className="content-card">
                    <img src={Icon4} alt="" />
                    <h1>Implantaçaõ e analise de tecnologia</h1>
                    <Button onClick={() => handleOpen('technologyDeployment')}>Ver Mais</Button>
                </div>
            </section >
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-tittle" variant="h6" component="h2">
                        {selectedSolution === 'automation' && "Automação de Sistemas"}
                        {selectedSolution == 'processsManagement' && "Gestão de processo e tecnologia"}
                        {selectedSolution === 'processOptimization' && "Otimização de processo e tecnologia"}
                        {selectedSolution === 'technologyDeployment' && "Implantação e análise de tecnologia"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2}}>
                    {selectedSolution === 'automation' && (
                        <>
                           Um serviço de consultoria de otimização de processos em sistemas de tecnologia oferece suporte especializado para melhorar a eficiência, eficácia e desempenho dos processos dentro de uma organização, especialmente aqueles relacionados à tecnologia da informação e sistemas. Esse tipo de consultoria visa identificar oportunidades de aprimoramento, eliminar gargalos e minimizar desperdícios, resultando em uma operação mais suave e produtiva.
                        
                        </>
                    )}
                    {selectedSolution === 'processManagement' && (
                        <>
                            Descrição da Gestão de Processo e Tecnologia
                           
                        </>
                     )}
                     {selectedSolution === 'processOptimization' && (
                        <>
                            Descrição da Otimização de Processos
                        
                        </>
                     )}
                     {selectedSolution === 'technologyDeployment' && (
                        <>
                           Descrição da Implantação e Análise de Tecnologia
                          
                        </>
                    )}
                    </Typography>

                </Box>
            </Modal>
        </>
    )
}