export const ContactList = ({ cols, list, ...props }) => {
  return (
    <div className={`col-lg-${12 / cols}`}>
      <div className='art-a art-card'>
        <div className='art-table p-15-15'>
          <ul>
            {list.map((info, index) => (
              <ContactListItem key={`contact-list-item-${index}`} {...info} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ContactListItem = ({ title, description }) => {
  return (
    <li>
      <h6>{title}</h6>
      <span>{description}</span>
    </li>
  );
};
