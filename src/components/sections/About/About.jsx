'use client';

import { SectionTitle, SectionWrapper, Hobbies } from '@/components';
import { Tag } from '@/styles';

export default SectionWrapper(() => {
  return (
    <>
      <SectionTitle title='About Me'>
        <Tag>{new Date('Jul 3 2023').toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })}</Tag>
      </SectionTitle>

      <div className='col-lg-12'>
        <div className='art-a art-card'>
          <p className='art-lg-text art-white'>
            <i>
              Consectetur adipisicing elit. Magni debitis nemo, minus aut tempora impedit quis quam omnis, odit saepe ipsa sunt magnam culpa quisquam
              iusto consectetur necessitatibus. Tenetur, eligendi!
            </i>
          </p>

          <p>
            Vero praesentium voluptatibus repellendus, delectus harum. Necessitatibus temporibus, veritatis sapiente laudantium eius rem dolore
            voluptas porro assumenda quam ea earum ad dolor dolores ut ipsam optio! Numquam dolore quidem sequi eum placeat voluptatum, assumenda et
            culpa iure nemo vero animi mollitia facere fuga sit debitis doloremque quo tempore nesciunt voluptates cum. Est, labore pariatur
            cupiditate non alias officia ad nihil animi itaque soluta quo perferendis vero libero ex. Iste ipsam eaque veniam facilis architecto unde,
            quibusdam accusamus culpa cumque delectus deserunt nemo saepe minima.
          </p>

          <ul className='art-custom-list'>
            <li>Doloribus recusandae</li>
            <li>Alias officia ad nihil </li>
            <li>Culpa repellat</li>
            <li>Officiis deleniti</li>
          </ul>

          <p>
            Doloribus recusandae vel odio laboriosam, officia, neque ad. Eius porro, quas adipisci mollitia similique possimus ex odio eum harum eos
            ut optio architecto eveniet corporis nostrum beatae impedit, iste officia tempora sapiente aut, distinctio numquam inventore et! Ducimus
            quasi ullam saepe aliquid aut minus molestiae nam. Dolor consequuntur cum consectetur ducimus obcaecati perspiciatis harum quae atque,
            architecto aut voluptatibus quaerat nisi, nobis asperiores.
          </p>

          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo officiis aliquam, placeat quis voluptatum ad. Eum, alias quo fuga sed?
          </blockquote>

          <p>
            Est nesciunt dolorum asperiores sint mollitia quod, nostrum eos maxime illo eveniet ducimus labore amet voluptatum laborum, ex ut
            similique omnis ipsum. Totam tempore praesentium assumenda ducimus porro ullam quasi, expedita sit esse alias quisquam! Asperiores at
            suscipit officiis deleniti soluta fugit quidem illo fuga, adipisci maiores. Nesciunt dolor, minus ex tenetur necessitatibus et id minima,
            vitae sit a, assumenda, iste suscipit facere. Voluptatibus animi, laboriosam qui officiis voluptatum. Voluptates quibusdam numquam
            distinctio fuga.
          </p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

          <Hobbies />
        </div>
      </div>
    </>
  );
}, 'about');
