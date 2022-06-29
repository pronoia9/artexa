import TechnologiesGrid from '../components/Technologies/TechnologiesGrid';

export default function TechnologiesPage(props) {
  return <TechnologiesGrid data={props.data} column={props.column || 3} />;
}