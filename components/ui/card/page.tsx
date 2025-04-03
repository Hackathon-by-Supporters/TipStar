'use client'

type Event = {
    id: number;
    title: string;
    description: string;
    imageUrl: string
}

//const {userid,eventid,eventtitle,eventdetail,eventthumbnailpath} = event;

export default function Card({ event }: { event: Event }) {

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">

                <div className="card bg-base-100 w-96 shadow-xl">


                    <div className="card-body">

                        <div className="card-action justify-end">
                            <button className="btn btn-primary">参加</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
