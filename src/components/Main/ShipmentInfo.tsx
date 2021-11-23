import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import './ShipmentInfo.scss'

interface Company {
  id: string,
  name: string,
  email: string,
  boxes: string,
}

type Props = {
  isSelectedCompany: boolean;
  company: Company;
}

export const ShipmentInfo: React.FC<Props> = (props) => {
  const { company } = props;
  const [cargoBoxes, setCargoBoxes] = useState('');

  useEffect(() => {
    setCargoBoxes(company.boxes)
  }, [company.boxes]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setCargoBoxes(event.target.value),
    [setCargoBoxes]
  );

  const calcBays = (boxes: string | null): number => 
    boxes
      ? Math.ceil(
          boxes
            .split(',')
            .map(x => +x)
            .reduce((a, b) => a + b, 0) / 10
        )
      : 0;

  return (
    <section className="shipment">
      <h2 className="shipment__name">{company.name}</h2>
      <a className="shipment__email" href={`mailto:${company.email}`}>{company.email}</a>
      <p className="shipment__bays">
        Number of required cargo bays {calcBays(cargoBoxes)}
      </p>
      <p>Cargo boxes</p>
      <input
        type="text"
        name="boxes"
        value={cargoBoxes}
        onChange={handleChange}
      />
    </section>
  )
}
