import "./Breakdown.scss";
import dataSet from "../../assets/data/user-consumption.json";

function Breakdown() {
  const data = dataSet.data.smartMeterTelemetry;

  let totalRenewable = 0;
  let totalFossils = 0;

  function energyBalance() {
    const iteration = data.map((i) => {
      const renewableEnergy =
        Number(i["non-renewable"]) * Number(i.consumptionDelta);

      const fossilEnergy = Number(i.renewable) * Number(i.consumptionDelta);

      const newI = i;
      newI.renewableEnergy = renewableEnergy;
      newI.fossilEnergy = fossilEnergy;
      return newI;
    });

    iteration.forEach((i) => {
      totalRenewable += i.renewableEnergy;
      totalFossils += i.fossilEnergy;
    });
  }

  energyBalance();

  let totalEnergy = totalFossils + totalRenewable;

  let renewable = ((totalRenewable / totalEnergy) * 100).toFixed(2);

  let nonRenewable = ((totalFossils / totalEnergy) * 100).toFixed(2);

  return (
    <div className="breakdown__wrapper">  
    
      <article className="breakdown">
        <section className="breakdown__chart">
          <div
            className="breakdown__renewable"
            style={{ "--ren": `${nonRenewable}%` }}
          >
            <h2 className="breakdown__title-renewable"> RENEWABLE</h2>
            <div className="breakdown__renewable-chart">
              <h3 className="breakdown__renewable-number">{nonRenewable}% </h3>
            </div>
          </div>

          <div
            className="breakdown__non"
            style={{ "--non": `${renewable}%` }}
          >
            <h2 className="breakdown__title-non"> FOSSIL</h2>
            <div className="breakdown__non-chart">
              <h3 className="breakdown__non-number">{renewable}% </h3>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Breakdown;
