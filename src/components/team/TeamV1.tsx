
import TeamV1Data from '../../../src/assets/jsonData/team/TeamV1Data.json';
import SplitText from "../animation/SplitText.jsx";
import SingleTeamV1 from './SingleTeamV1';

interface DataType {
  sectionClass?: string;
  hasTitle?: boolean;
}

type TeamMember = {
  id: number;
  name: string;
  title: string;
  group: 'Executive' | 'Department';
  department?: string;
  thumb?: string;
  thumbLight?: string;
  text?: string;
};

const groupLabel: Record<TeamMember['group'], string> = {
  Executive: 'Executive Leadership',
  Department: 'Heads & Managers',
};

// Provide placeholder if no image is available
const withPlaceholder = (member: TeamMember): TeamMember => ({
  ...member,
//  thumb: 'https://cdn.vectorstock.com/i/500p/44/01/default-avatar-photo-placeholder-icon-grey-vector-38594401.jpg',

});

const TeamV1 = ({ sectionClass, hasTitle }: DataType) => {
  const data = (TeamV1Data as TeamMember[]);
  const groups: TeamMember['group'][] = ['Executive', 'Department'];

  const byGroup = (g: TeamMember['group']) => data.filter(m => m.group === g);

  return (
    <>
      <div className={`team-style-one-area relative overflow-hidden default-padding-bottom ${sectionClass ? sectionClass : ""}`}>
        {hasTitle && (
          <div className="team-style-one-heading">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                  <div className="site-heading">
                    <h4 className="sub-title">Team members</h4>
                    <h2 className="title split-text">
                      <SplitText
                        delay={40}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                      >
                        Your Expert Team
                      </SplitText>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          {groups.map((g) => {
            const members = byGroup(g);
            const count = members.length;
            return (
              <section className="mb-5" key={g}>
                <div className="row align-items-end mb-3">
                  <div className="col-md-8">
                    <h3 className="mb-0">{groupLabel[g]}</h3>
                  </div>
                  <div className="col-md-4 text-md-end text-muted">
                    <span>{count} {count === 1 ? 'member' : 'members'}</span>
                  </div>
                </div>

                <div className="row g-4">
                  {members.map((m) => {
                    const member = withPlaceholder(m);
                    return (
                      <div className="col-12 col-sm-6 col-lg-4" key={member.id}>
                        <SingleTeamV1 team={member as any} />
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TeamV1;