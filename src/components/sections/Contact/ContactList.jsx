export const ContactList = ({ cols, ...props }) => {
  console.log(props);
  return (
    <div className={'col-lg-' + 12 / cols}>
      <div className='art-a art-card'>
        <div className='art-table p-15-15'>
          <ul>
            {/* {props.info.map((i) => (
              <ContactCardInfo key={i.id} id={i.id} info={i} />
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ContactListItem = () => <></>;
