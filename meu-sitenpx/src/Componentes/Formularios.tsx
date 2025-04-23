//Todos os componentes de formulários estão neste arquivo
"use client";
import { useState } from "react";

export interface OpcaoSelect {
  ordem: string;
  label: string;
  href: string;
}

interface Select1Props {
  opcao: OpcaoSelect[];
  item0: string;
  label: string;
}

export function Select1({ opcao, item0, label }: Select1Props) {
  const [selectedHref, setSelectedHref] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHref(event.target.value);
  };

  const handleClick = () => {
    if (selectedHref) {
      window.location.hash = selectedHref;
    }
  };

  return (
    <div className="col-10 offset-1">
      <h6>{label}</h6>
      <div className="btn-group">
        <select className="form-select" onChange={handleChange}>
          <option value="">{item0}</option>
          {opcao.map((opcao) => (
            <option key={opcao.ordem} value={opcao.href}>
              {opcao.label}
            </option>
          ))}
        </select>
        <button className="btn btn-secondary" onClick={handleClick}>
          Procurar
        </button>
      </div>
    </div>
  );
}
