import { CardAvaliacao } from "../../components/Card"
import { Main } from "../../components/Main"
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";
import * as z from "zod";
import { useEffect, useState } from "react";
import { FormControl, FormLabel, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { HttpMethod } from "../../../types";
import { useRouter } from "next/router";
import React from "react";
import { fetcher } from "../../lib/fetcher"
import useSWR, { mutate } from "swr";

const formSchema = z.object({
    name: z.string(),
    data_elaboracao: z.string(),
    revisao_documento: z.string(),
    jornada_trabalho: z.string(),
    cargo: z.string(),
    tipo_atividade: z.string(),
    variacao_turno: z.string(),
    trabalho_noturno: z.string(),
    descricao_ambiente_trabalho: z.string(),
    numero_trabalhadores_expostos: z.any(),
    tarefa_prescrita: z.string(),
    tarefa_real: z.string(),
    consideracoes_avaliador: z.string(),
    posto_trabalho: z.string(),
    ergonomista_responsavel: z.string(),
    areaavaliadaName: z.string(),
    unidadeName: z.string(),
})

interface EmpresaData {
    name: string;
    email: string;
    responsavel_tecnico: string;
    registro_responsavel_tecnico: string;
    ramo_atividade: string;
    cidade: string;
    estado: string;
    habilitacao_responsavel_tecnico: string;
    areaavaliadaName: string;
    unidadeName: string;
    atividade_principal: string;
    cnae: string;
    grau_risco: string;
    nome_gestor_contrato: string;
    telefone_gestor_contrato: string;
    email_gestor_contrato: string;
    razao_social: string;
    ergonomista: string;
    ie: string;
    cep: string;
    setor: string;
    endereco: string;
    bairro: string;
    telefone: string;
    cnpj: string;
}

interface Option {
    readonly label: string;
    readonly value: string;
}


export default function AvaliacaoPreliminar() {
    const router = useRouter()

    const { data: empresa, isValidating } = useSWR<EmpresaData>(
        router.isReady && `/api/empresa?empresaId=918e87c2-8246-4825-8506-fbce0357bad0`,
        fetcher,
        {
            dedupingInterval: 1000,
            revalidateOnFocus: false,
        }
    );

    const [loading, setLoading] = useState(false)
    const [listar, setListar] = useState(false)

    const [empresaOptions, setEmpresaOptions] = useState([]);
    const [selectedOption2, setSelectedOption2] = useState('');

    useEffect(() => {
        const fetchEmpresaOptions = async () => {
            try {
                const response = await axios.get("/api/empresa");
                setEmpresaOptions(response.data.empresas);
            } catch (error) {
                console.error("Erro ao obter opções da API empresa:", error);
            }
        };

        fetchEmpresaOptions();
    }, [listar]);

    const [selectedRadioValue, setSelectedRadioValue] = useState("");

    const handleRadioChange = (value: string) => {
        setSelectedRadioValue(value);

    };

    const handleRadioClick = (event: React.MouseEvent<HTMLInputElement>) => {
        event.stopPropagation();
    };


    const [selectedRadioValue3, setSelectedRadioValue3] = useState("");

    const handleRadioChange3 = (value: string) => {
        setSelectedRadioValue3(value);

    };

    const handleRadioClick3 = (event: React.MouseEvent<HTMLInputElement>) => {
        event.stopPropagation();
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            data_elaboracao: "",
            revisao_documento: "",
            jornada_trabalho: "",
            cargo: "",
            tipo_atividade: "",
            variacao_turno: "",
            trabalho_noturno: "",
            descricao_ambiente_trabalho: "",
            numero_trabalhadores_expostos: 0,
            tarefa_prescrita: "",
            tarefa_real: "",
            consideracoes_avaliador: "",
            posto_trabalho: "",
            ergonomista_responsavel: "",
            areaavaliadaName: "",
            unidadeName: "",
        }
    })

    const createOption = (label: string) => ({
        label,
        value: label.toLowerCase().replace(/\W/g, ''),
    });


    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState<Option[]>([]);
    const [valueSelect, setValueSelect] = useState<Option[] | null>(null);

    //unidade
    const [isLoading2, setIsLoading2] = useState(false);
    const [options2, setOptions2] = useState<Option[]>([]);
    const [valueSelect2, setValueSelect2] = useState<Option[] | null>(null);

    const handleCreate = (inputValue: string) => {
        setIsLoading(true);
        setTimeout(() => {
            const newOption = createOption(inputValue);
            setIsLoading(false);
            setOptions((prev) => [...prev, newOption]);
            //@ts-ignore
            setValueSelect((prev) => [...prev, newOption]);
        }, 1000);
    }

    const handleCreate2 = (inputValue: string) => {
        setIsLoading2(true);
        setTimeout(() => {
            const newOption = createOption(inputValue);
            setIsLoading2(false);
            setOptions2((prev) => [...prev, newOption]);
            //@ts-ignore
            setValueSelect2((prev) => [...prev, newOption]);
        }, 1000);
    }

    useEffect(() => {
        if (empresa) {
            const timeout = setTimeout(() => {
                if (empresa.areaavaliadaName.includes(',')) {
                    const areaavaliadaNames = empresa.areaavaliadaName.split(',');
                    const newOptions = areaavaliadaNames.map(name => ({
                        label: name.trim(),
                        value: name.toLowerCase().replace(/\W/g, ""),
                    }));
                    setOptions(newOptions);
                    // setValueSelect(newOptions);
                    setValueSelect(null);
                } else {
                    const option = {
                        label: empresa.areaavaliadaName,
                        value: empresa.areaavaliadaName.toLowerCase().replace(/\W/g, ""),
                    };
                    setOptions([option]);
                    setValueSelect([option]);
                }
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [empresa]);

    useEffect(() => {
        if (empresa) {
            const timeout = setTimeout(() => {
                if (empresa.unidadeName.includes(',')) {
                    const unidadeNames = empresa.unidadeName.split(',');
                    const newOptions = unidadeNames.map(name => ({
                        label: name.trim(),
                        value: name.toLowerCase().replace(/\W/g, ""),
                    }));
                    setOptions2(newOptions);
                    // setValueSelect2(newOptions);
                } else {
                    const option = {
                        label: empresa.unidadeName,
                        value: empresa.unidadeName.toLowerCase().replace(/\W/g, ""),
                    };
                    setOptions2([option]);
                    setValueSelect2([option]);
                }
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [empresa]);

    const { register, handleSubmit, formState } = form;
    const { isSubmitting, isValid } = formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const revisaoDocumentoFormatado = values.revisao_documento + ':00Z';
        const dataElaboracaoFormatado = values.data_elaboracao + ':00Z';
        try {
            // Convertendo numero_trabalhadores_expostos para número
            const numeroTrabalhadoresExpostos = parseInt(values.numero_trabalhadores_expostos);

            const response = await fetch("/api/aep", {
                method: HttpMethod.POST,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data_elaboracao: dataElaboracaoFormatado,
                    revisao_documento: revisaoDocumentoFormatado,
                    jornada_trabalho: values.jornada_trabalho,
                    cargo: values.cargo,
                    tipo_atividade: values.tipo_atividade,
                    variacao_turno: selectedRadioValue,
                    trabalho_noturno: selectedRadioValue3,
                    descricao_ambiente_trabalho: values.descricao_ambiente_trabalho,
                    numero_trabalhadores_expostos: numeroTrabalhadoresExpostos,
                    tarefa_prescrita: values.tarefa_prescrita,
                    tarefa_real: values.tarefa_real,
                    consideracoes_avaliador: values.consideracoes_avaliador,
                    posto_trabalho: values.posto_trabalho,
                    ergonomista_responsavel: values.ergonomista_responsavel,
                    empresaId: selectedOption2,
                    areaavaliadaName: valueSelect?.map(item => item.value),
                    unidadeName: valueSelect2?.map(item => item.value),
                })
            });
            toast.success("AEP Cadastrado!");
            console.log(await response.json());

            if (!response.ok) {
                const error = await response.text();
                throw new Error(error);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const onError: SubmitErrorHandler<z.infer<typeof formSchema>> = (errors) => {
        console.error(errors)
    }
    const [value, setValue] = React.useState('1')
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Main title={""} title2={"Avaliação Ergonômica Preliminar"} w={undefined} path={""} altText={""} tamh={0} tamw={0}>
                <CardAvaliacao
                    type={"submit"}

                    type2={"datetime-local"}
                    isInvalid2={!!formState.errors.data_elaboracao}
                    register2={register("data_elaboracao")}
                    error2={formState.errors.data_elaboracao?.message}

                    type3={"datetime-local"}
                    isInvalid3={!!formState.errors.revisao_documento}
                    register3={register("revisao_documento")}
                    error3={formState.errors.revisao_documento?.message}

                    type4={"cargo"}
                    isInvalid4={!!formState.errors.cargo}
                    register4={register("cargo")}
                    error4={formState.errors.cargo?.message}

                    type5={"tipo_atividade"}
                    isInvalid5={!!formState.errors.tipo_atividade}
                    register5={register("tipo_atividade")}
                    error5={formState.errors.tipo_atividade?.message}

                    type6={"jornada_trabalho"}
                    isInvalid6={!!formState.errors.jornada_trabalho}
                    register6={register("jornada_trabalho")}
                    error6={formState.errors.jornada_trabalho?.message}

                    type7={"number"}
                    isInvalid7={!!formState.errors.numero_trabalhadores_expostos}
                    register7={register("numero_trabalhadores_expostos")}
                    error7={formState.errors.numero_trabalhadores_expostos?.message}

                    type8={"descricao_ambiente_trabalho"}
                    isInvalid8={!!formState.errors.descricao_ambiente_trabalho}
                    register8={register("descricao_ambiente_trabalho")}
                    error8={formState.errors.descricao_ambiente_trabalho?.message}

                    type9={"tarefa_prescrita"}
                    isInvalid9={!!formState.errors.tarefa_prescrita}
                    register9={register("tarefa_prescrita")}
                    error9={formState.errors.tarefa_prescrita?.message}

                    type10={"tarefa_real"}
                    isInvalid10={!!formState.errors.tarefa_real}
                    register10={register("tarefa_real")}
                    error10={formState.errors.tarefa_real?.message}

                    type11={"consideracoes_avaliador"}
                    isInvalid11={!!formState.errors.consideracoes_avaliador}
                    register11={register("consideracoes_avaliador")}
                    error11={formState.errors.consideracoes_avaliador?.message}


                    type13={"posto_trabalho"}
                    isInvalid13={!!formState.errors.posto_trabalho}
                    register13={register("posto_trabalho")}
                    error13={formState.errors.posto_trabalho?.message}

                    type14={"ergonomista_responsavel"}
                    isInvalid14={!!formState.errors.ergonomista_responsavel}
                    register14={register("ergonomista_responsavel")}
                    error14={formState.errors.ergonomista_responsavel?.message}

                    setValue={setValue}
                    value={value}

                    isInvalidEmpresa={!!formState.errors.name}
                    registerEmpresa={register("name")}
                    valueEmpresa={selectedOption2}
                    onChangeEmpresa={(e: any) => setSelectedOption2(e.target.value)}
                    empresaOptions={empresaOptions}

                    setValue2={selectedRadioValue}
                    handleRadioChange={handleRadioChange}
                    handleRadioClick={handleRadioClick}

                    setValue3={selectedRadioValue3}
                    handleRadioChange3={handleRadioChange3}
                    handleRadioClick3={handleRadioClick3}

                    isLoading={isLoading}
                    //@ts-ignore
                    onChangeSelect={(newValue) => setValueSelect(newValue)}
                    handleCreate={handleCreate}
                    options={options}
                    valueSelect={valueSelect}

                    isLoading2={isLoading2}
                    //@ts-ignore
                    onChangeSelect2={(newValue) => setValueSelect2(newValue)}
                    handleCreate2={handleCreate2}
                    options2={options2}
                    valueSelect2={valueSelect2}
                />



            </Main>
        </form>
    )
}