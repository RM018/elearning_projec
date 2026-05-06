'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import VideoPlayer from '../../components/video-player';
import { PlayIcon, CheckCircleIcon, ClockIcon, UserGroupIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const courseData = {
  '1': {
    title: 'Basic Literacy & Numeracy',
    description: 'Friendly, story-based lessons to help children learn letters, reading and simple arithmetic using local stories and examples.',
    thumbnail: 'https://media.collegedekho.com/media/img/news/12th_best_courses_1.png?height=253&width=380',
    duration: '5 hours',
    videos: 8,
    students: 320,
    level: 'Beginner',
    category: 'Foundational',
    instructor: {
      name: 'Asha Devi (Community Teacher)',
      avatar: '/images/avatar-teacher.svg',
      bio: 'Local educator focusing on storytelling and practical literacy activities for village children.'
    },
    lessons: [
      { id: 1, title: 'Letters Through Stories', duration: '10:12', videoId: 'jrZ5NUt3kFA', completed: true },
      { id: 2, title: 'Reading Simple Words', duration: '12:30', videoId: 'jNQXAC9IVRw', completed: true },
      { id: 3, title: 'Counting with Everyday Items', duration: '09:20', videoId: '9bZkp7q19f0', completed: false },
      { id: 4, title: 'Write Along: Your Name', duration: '11:05', videoId: 'dQw4w9WgXcQ', completed: false }
    ]
  },
  '2': {
    title: 'Practical Agriculture Basics',
    description: 'Simple, actionable lessons on seed care, soil prep, and small kitchen gardens that children and families can try at home.',
    thumbnail: 'https://media.collegedekho.com/media/img/news/12th_best_courses_1.png?height=253&width=380',
    duration: '6 hours',
    videos: 10,
    students: 460,
    level: 'Beginner',
    category: 'Agriculture',
    instructor: {
      name: 'Ravi Kumar (Farmer Educator)',
      avatar: '/images/avatar-farmer.svg',
      bio: 'Practicing farmer who teaches simple, low-cost farming techniques for small plots.'
    },
    lessons: [
      { id: 1, title: 'Seed Saving & Planting', duration: '14:30', videoId: 'PolcZfURSuE', completed: false },
      { id: 2, title: 'Soil and Compost Basics', duration: '13:20', videoId: 'jNQXAC9IVRw', completed: false },
      { id: 3, title: 'Growing a Kitchen Garden', duration: '10:45', videoId: '9bZkp7q19f0', completed: false }
    ]
  }
};

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = Array.isArray(params.id) ? params.id[0] : params.id;
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-blue-600 hover:text-blue-700 font-medium">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleVideoEnd = () => {
    const lessonId = course.lessons[currentLesson].id;
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    
    if (currentLesson < course.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const selectLesson = (index: number) => {
    setCurrentLesson(index);
  };

  const progress = (completedLessons.length / course.lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link 
            href="/courses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VideoPlayer
              videoId={course.lessons[currentLesson].videoId}
              title={course.lessons[currentLesson].title}
              onVideoEnd={handleVideoEnd}
            />

            <div className="mt-2 text-sm text-gray-500">
              <a
                href={`https://www.youtube.com/watch?v=${course.lessons[currentLesson].videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Watch on YouTube
              </a>
            </div>

            <div className="mt-6 bg-white rounded-lg p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <PlayIcon className="h-4 w-4" />
                  <span>{course.videos} videos</span>
                </div>
                <div className="flex items-center space-x-1">
                  <UserGroupIcon className="h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {course.level}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{course.description}</p>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">About the Instructor</h3>
                <div className="flex items-start space-x-4">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{course.instructor.name}</h4>
                    <p className="text-gray-600 text-sm">{course.instructor.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">Progress</h3>
                  <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-4">Course Content</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {course.lessons.map((lesson, index) => {
                  const isCompleted = completedLessons.includes(lesson.id) || lesson.completed;
                  const isCurrent = index === currentLesson;
                  
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => selectLesson(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        isCurrent 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            {isCompleted && (
                              <CheckCircleIcon className="h-4 w-4 text-green-600 flex-shrink-0" />
                            )}
                            <h4 className={`font-medium text-sm ${isCurrent ? 'text-blue-700' : 'text-gray-900'}`}>
                              {index + 1}. {lesson.title}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{lesson.duration}</p>
                        </div>
                        {isCurrent && (
                          <span className="text-xs text-blue-600 font-medium">Now Playing</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
