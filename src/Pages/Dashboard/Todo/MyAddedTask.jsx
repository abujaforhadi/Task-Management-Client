import { useContext, useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem"; // Create a separate SortableItem component
import TodoList from "./TodoList";
import { AuthContext } from "../../../Auth/AuthProvider";

const MyAddedTask = () => {
    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        fetch(`https://taskserverme.vercel.app/tasks`)
            .then(res => res.json())
            .then(data => setMyPosts(data));
    }, []);

    // Handle drag end
    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return; // Prevent errors

        setMyPosts((items) => {
            const oldIndex = items.findIndex(item => item._id === active.id);
            const newIndex = items.findIndex(item => item._id === over.id);
            return arrayMove(items, oldIndex, newIndex);
        });
    };

    return (
        <div>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={myPosts.map((item) => item._id)} strategy={verticalListSortingStrategy}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-5">
                        {myPosts.map((myPost) => (
                            <SortableItem key={myPost._id} id={myPost._id}>
                                <TodoList myPost={myPost} setMyPosts={setMyPosts} myPosts={myPosts} />
                            </SortableItem>
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default MyAddedTask;
