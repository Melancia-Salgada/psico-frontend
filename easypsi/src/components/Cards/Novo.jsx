import React, { useState } from "react";
import { Quill } from "react-quill"; // Import Quill if you're using it

export const Paciente = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    rg: "",
    email: "",
    endereco: "",
    complemento: "",
    cep: "",
    responsavelNome: "",
    responsavelTelefone: "",
    responsavelCpf: "",
    anotacoes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <div className="h-[50rem] w-[95rem] bg-roxo rounded-[50px]">
      <div className="pt-10 pl-16 pr-16">
        <div className="text-[80px] mb-[30px]">Novo Paciente</div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <div>
              {/* Personal Information */}
              <div>
                <label className="mb-2">Nome</label>
                <input
                  name="nome"
                  className="p-2 w-full"
                  type="text"
                  placeholder="Digite o nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <label className="mb-2">CPF</label>
                  <input
                    name="cpf"
                    className="p-2 w-full"
                    type="text"
                    placeholder="Digite o CPF"
                    value={formData.cpf}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-2">RG</label>
                  <input
                    name="rg"
                    className="p-2 w-full"
                    type="text"
                    placeholder="Digite o RG"
                    value={formData.rg}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Additional Data */}
              <div>
                <span className="underline">Dados Adicionais</span>
                <div>
                  <label className="mb-2">Email</label>
                  <input
                    name="email"
                    className="p-2 w-full"
                    type="text"
                    placeholder="Digite o email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Add more fields as needed */}
              </div>

              {/* Address Information */}
              <div>
                <span className="underline">Local</span>
                <div>
                  <label className="mb-2">Endereço</label>
                  <input
                    name="endereco"
                    className="p-2 w-full"
                    type="text"
                    placeholder="Digite o endereço"
                    value={formData.endereco}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <label className="mb-2">Complemento</label>
                    <input
                      name="complemento"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o complemento"
                      value={formData.complemento}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="mb-2">CEP</label>
                    <input
                      name="cep"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o CEP"
                      value={formData.cep}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div>
              <div className="border-preto-whitemode border-[3px] h-full"></div>
            </div>

            {/* Minor Information */}
            <div>
              <span className="underline">Menor de Idade</span>
              <div>
                <label className="mb-2">Nome do Responsável</label>
                <input
                  name="responsavelNome"
                  className="p-2 w-full"
                  type="text"
                  placeholder="Digite o nome do responsável"
                  value={formData.responsavelNome}
                  onChange={handleChange}
                />
                <div className="flex justify-between">
                  <div>
                    <label className="mb-2">Telefone</label>
                    <input
                      name="responsavelTelefone"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o telefone"
                      value={formData.responsavelTelefone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="mb-2">CPF</label>
                    <input
                      name="responsavelCpf"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o CPF"
                      value={formData.responsavelCpf}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <span className="underline">Anotações</span>
                <Quill
                  value={formData.anotacoes}
                  onChange={(value) => setFormData({ ...formData, anotacoes: value })}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Salvar Paciente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Consulta = () => {};

export const Pagamento = () => {};

export const Adm = () => {};
