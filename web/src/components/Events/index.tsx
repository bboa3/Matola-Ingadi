import React from 'react';
import Feed from '../Feed';
import {
  Container
} from './styles';

import images from '../../assets/images';

const Events: React.FC = () => {
  return (
    <Container id="events">
      <Feed
        image={
          [
            images.civilWedding,
            images.MrAndMrs,
            "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/128692337_2558994077724218_1604710668162522670_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_eui2=AeELojrv81jOsQo048bnOA2Xwijk1jZCBhvCKOTWNkIGG1ysjkyHs1Sgcwqsc_mNYqfWPau1BhnzW6CgJl_1BVzf&_nc_ohc=WwiaeM_aNOIAX82_Rke&_nc_ht=scontent.fmpm2-1.fna&oh=a10fb8c1bc53c4ba745177743af205ca&oe=5FF4BA5B",
          ]
        }
        title='Casamentos'
        description='Celebramos o amor em todas as suas formas e cores.
          Alimentamos cumplicidade, autenticidade,
          espontaneidade. Organizamos casamentos que
          surpreendem, provocam reações, surpreendem e
          perturbam.'
        alt='Casamento'
        toRight={false}
      />

      <Feed
        image={
          [
            "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/70558596_2210698002553829_7561043771442331648_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeGb0LVLDxuiJMMcpYODG4F60vxAprkfjJnS_ECmuR-Mma8Y3OTkEMMmlbHKUJvwY9CQPZNeGaOE4IIYKhGkRzO2&_nc_ohc=wsRmgC3yV2gAX_hKbnE&_nc_ht=scontent.fmpm2-1.fna&oh=3b4dbc1e715e30cc3a02d9d69e7afc90&oe=5FF7575A",
            "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/71201885_2210697815887181_7947316611600351232_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_eui2=AeHYt8djA5nlBXfej8IVBtiIRMbWtNU4I1pExta01TgjWup0Bbyn-CKfpbiuTnoKESDp1nKE5LFZf8k1dhHB6GHx&_nc_ohc=XIGhmxmXGa0AX8ipv9D&_nc_ht=scontent.fmpm2-1.fna&oh=0df5c70f242bd65a21966c93b3990c89&oe=5FF7833B"
          ]
        }
        title='Eventos empresariais'
        description='Oferecemos  uma estrutura e  uma equipe experiente para garantir 
          que os participantes tenham um momento especial de alegria, 
          estímulo e união ou sucesso na relação entre clientes e fornecedores.'
        alt='Evento empresarial'
        toRight={true}
      />

      <Feed
        image={[
          "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/117597181_2466334720323488_6540508348172128084_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_eui2=AeFKRv_AinqiZfvBZWsPYioNksxslP7IJmSSzGyU_sgmZK9aaYctUPhHreIHNUvB1fnuRCr3K7bK30ooDqjOSUN_&_nc_ohc=PlxwB-JebHoAX8UduXX&_nc_ht=scontent.fmpm2-1.fna&oh=c884a15fba14383d52cb26f034af9207&oe=5FF525E5",
          "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/84698838_2327145874242374_8982920878358528000_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_eui2=AeHOfeHxhWmyOd30zA9AZnDdyjVH7x52f1HKNUfvHnZ_UdXNO-vOk58pDGssQFccvPDNfGr9dqX71ckWAKAYfq0h&_nc_ohc=tEZdY3pmvxYAX-KI26U&_nc_ht=scontent.fmpm2-1.fna&oh=8eb71c068eb2c4af59986d8e2e9f27fe&oe=5FF67FAE"
        ]}
        title='Aniversários'
        description='Festas de Aniversário precisam ser celebradas em Grande Estilo! Matola Ingadi
          dispõe de toda a estrutura necessária para que você e seus convidados aproveitem ao máximo, 
          tendo à disposição serviços e equipes para tornar sua festa, um evento inesquecível.'
        alt='Aniversário'
        toRight={false}
      />

      <Feed
        image={
          [
            "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/68931451_2192323794391250_5671322688790986752_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_eui2=AeHM5y8cD2Jgb402lgddnH6D4dweRpY17Fvh3B5GljXsWyng4KKq0-JlOadJ_BJuzZTJj1r3y4R1UcrQ2VmKpeMR&_nc_ohc=BvESoAqd6UsAX9-zq9_&_nc_ht=scontent.fmpm2-1.fna&oh=aa478a55600ca92d35554d620599368e&oe=5FF4DB98",
            "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/69378611_2192323857724577_5898526523173896192_o.jpg?_nc_cat=101&cb=846ca55b-ee17756f&ccb=2&_nc_sid=730e14&_nc_eui2=AeFNR64DfgtlUOlzv8JM2oVHm5LBDRInAQ6bksENEicBDsJ3WZRScfyIi_yA-WVrUGicUXoFbT5kfyNMFgj83e0y&_nc_ohc=PW03J5Ieyg8AX8NHfmX&_nc_ht=scontent.fmpm2-1.fna&oh=6916617011231653990a0fca1026b5f3&oe=5FF7818A",
            "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/68820052_2192324097724553_4448097783638917120_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeHY0gHoxyL-7ZMcZ8m7lFBWFeceZ1WfR6oV5x5nVZ9Hqolobj7Vcrmxfr2M1CPfQjIjC6n0DXLjFAZHgvX11CNo&_nc_ohc=6v7F480G91QAX8vW9vW&_nc_ht=scontent.fmpm2-1.fna&oh=13aaf2f48890365b5264273c4189ef9f&oe=5FF7DBC9",
            "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/69245494_2192324137724549_3845709829892997120_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_eui2=AeF257X_6guFtqIjP-pwQ4Zj9cvpc0ZRxmn1y-lzRlHGaVlfGp8NxibUgDk343Et4RVMLFh6Pzl4kSF75SfxaCA2&_nc_ohc=wTc9ko9VeTsAX-RYYv0&_nc_oc=AQk_1NYczmm0CAQAjexnBrCDkNjkON44ucUGU6s6t6jPZkbuRdvtmtUNuHYzzY4iavA&_nc_ht=scontent.fmpm2-1.fna&oh=8a4e1986f12d709bda8de247cb1c62ba&oe=5FF7C1CF",
            "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/69375618_2192323911057905_289795728522346496_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeHN9AsMjdfZG5d9bscFahKxGeD4gc1b0bsZ4PiBzVvRu6hyKvqUwIcA_h8Rfyc2zhieUXgBtNJORpzwYEj0mIYf&_nc_ohc=wj3GPkYWiKwAX9MjmZH&_nc_ht=scontent.fmpm2-1.fna&oh=a769536c093bf13d73f9dd6ed6ed3e06&oe=5FF5035D",
            "https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/68529440_2192323954391234_2740318035406487552_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_eui2=AeGduAS-Cd7wp_aBsCnop8nNdjLgjTquADp2MuCNOq4AOlQX8-izGskySYI1VIYVDJS89wrIckF2drAB-O7BGzmJ&_nc_ohc=oPVBkL4hGLYAX_REbf2&_nc_ht=scontent.fmpm2-1.fna&oh=e38454c05951369cac93e6c6f5ef2ec7&oe=5FF66033"
          ]
        }
        title='Bodas'
        description='Uma vez casados, a celebração da união dos noivos não acaba! Todo ano, no aniversário de casamento do casal, 
          é comemorada a data em que o matrimonio foi selado com as Bodas de Casamento. A palavra Boda tem origem do Latim “vota”, que significa “promessas”. 
          É a renovação dos votos do casamento.'
        alt='Aniversário'
        toRight={true}
      />
      
    </Container>
  )
}

export default Events;